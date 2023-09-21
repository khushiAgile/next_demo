import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "enter user name"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "enter password"

                }
            },
            async authorize(credentials) {

                const user = { id: '11', name: 'khushi', password: '123456' }

                if (credentials?.username === user?.name && credentials?.password === user?.password) {
                    return user
                }
                else {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET
}