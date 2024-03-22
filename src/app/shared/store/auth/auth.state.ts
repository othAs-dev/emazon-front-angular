import { Action, Selector, State, StateContext } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '@feat/auth/auth.service';
import { Login, Logout, UserDetails } from '@app/shared/store/auth/auth.action';
import { EMPTY, mergeMap, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AccessToken } from '@app/shared/models/access-token';
import { UserDetail } from '@app/shared/models/user-detail';
import { Navigate } from '@ngxs/router-plugin';

export interface AuthStateModel {
    token: string | null,
    email: string | null,
    userDetails: UserDetail | null
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        token : null,
        email: null,
        userDetails: null
    }
})
@Injectable()
export class AuthState {
    private _authService: AuthService = inject(AuthService);
    @Selector()
    static token(state: AuthStateModel): string | null {
        return state.token;
    }

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean  {
        return !!state.token;
    }

    @Selector()
    static getUserDetails(state: AuthStateModel): UserDetail | null {
        return state.userDetails;
    }

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login): Observable<AccessToken> {
        return this._authService.login(action.payload).pipe(
            tap((result: {token: string}) => {
                ctx.patchState({
                    token: result.token,
                    email: action.payload.email
                })
                ctx.dispatch(new UserDetails())
                ctx.dispatch(new Navigate(['/marketplace/home']))
            })
        )
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>): Observable<void> {
        const state = ctx.getState();
        return this._authService.logout(state.token).pipe(
            tap(() => {
                ctx.setState({
                    token: null,
                    email: null,
                    userDetails: null
                })
                ctx.dispatch(new Navigate(['/']))
            })
        )
    }

    @Action(UserDetails)
    userDetails(ctx: StateContext<AuthStateModel>): Observable<void> {
        const state = ctx.getState();
        return this._authService.getUserDetails(state.token).pipe(
            tap((result: { user_details: UserDetail }) => {
                ctx.patchState({
                    userDetails: result.user_details
                })
            }),
            mergeMap(_ => EMPTY)
        )
    }
}
