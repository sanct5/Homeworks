import React from 'react'
import { NavComponent } from '../components/NavComponent'

export const LoginPage = () => {
    return (
        <div>
            <NavComponent />
            <h1>Login page</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}