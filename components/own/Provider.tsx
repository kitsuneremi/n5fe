'use client'

// eslint-disable-next-line import/no-anonymous-default-export
import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import {Session} from "next-auth";
import { ThemeProvider } from "@/components/theme-provider"

// eslint-disable-next-line react/display-name
export default ({children}:{children: ReactNode}):ReactNode => {
    return (
        <div>
            <SessionProvider>
                <ThemeProvider attribute="class"  defaultTheme="light">
                    {children}
                </ThemeProvider>
            </SessionProvider>
        </div>
    )
}