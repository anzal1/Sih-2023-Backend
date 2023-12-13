import User from '../models/User'
import express from 'express'

export interface IAccessToken {
    accessToken: string
    refreshToken: string
}

export interface IRegisterUser {
    name: string
    email: string
    password: string
    phone: string
    role: string
    profilePic: string
    address: string
    city: string
    state: string
    country: string
    zipCode: string
}

export interface ILoginUser {
    email: string
    password: string
}

export interface UserRequest<P,R1,R2> extends express.Request<P,R1,R2> {
    user: User
}