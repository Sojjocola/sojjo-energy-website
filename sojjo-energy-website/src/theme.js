import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const colorKeys = (mode) => ({
    ...(mode === 'dark'
    ? {
        grey: {
            100: "#d9ebea",
            200: "#b4d7d5",
            300: "#8ec2c1",
            400: "#69aeac",
            500: "#439a97",
            600: "#367b79",
            700: "#285c5b",
            800: "#1b3e3c",
            900: "#0d1f1e"
        },
        primary: {
            100: "#e0f0f1",
            200: "#c0e2e2",
            300: "#a1d3d4",
            400: "#81c5c5",
            500: "#62b6b7",
            600: "#4e9292",
            700: "#3b6d6e",
            800: "#274949",
            900: "#142425"
        },
        greenAccent: {
            100: "#eaf8f5",
            200: "#d5f2eb",
            300: "#c1ebe2",
            400: "#ace5d8",
            500: "#97dece",
            600: "#79b2a5",
            700: "#5b857c",
            800: "#3c5952",
            900: "#1e2c29"
        },
        redAccent: {
            100: "#f5fbf7",
            200: "#eaf8ee",
            300: "#e0f4e6",
            400: "#d5f1dd",
            500: "#cbedd5",
            600: "#a2beaa",
            700: "#7a8e80",
            800: "#515f55",
            900: "#292f2b"
        },
    } : {
        grey: {
            100: "#0d1f1e",
            200: "#1b3e3c",
            300: "#285c5b",
            400: "#367b79",
            500: "#439a97",
            600: "#69aeac",
            700: "#8ec2c1",
            800: "#b4d7d5",
            900: "#d9ebea",
        },
        primary: {
            100: "#142425",
            200: "#274949",
            300: "#3b6d6e",
            400: "#4e9292",
            500: "#62b6b7",
            600: "#81c5c5",
            700: "#a1d3d4",
            800: "#c0e2e2",
            900: "#e0f0f1",
        },
        greenAccent: {
            100: "#1e2c29",
            200: "#3c5952",
            300: "#5b857c",
            400: "#79b2a5",
            500: "#97dece",
            600: "#ace5d8",
            700: "#c1ebe2",
            800: "#d5f2eb",
            900: "#eaf8f5",
        },
        redAccent: {
            100: "#292f2b",
            200: "#515f55",
            300: "#7a8e80",
            400: "#a2beaa",
            500: "#cbedd5",
            600: "#d5f1dd",
            700: "#e0f4e6",
            800: "#eaf8ee",
            900: "#f5fbf7",
        },
    })
});

export const themeSettings = (mode) => {
    const colors = colorKeys(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' 
            ? {
                primary : {
                    main: colors.primary[500],
                }, 
                secondary : {
                    main: colors.greenAccent[500],
                }, 
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                }, 
                background : {
                    default: colors.primary[500],
                }
            } : {
                primary : {
                    main: colors.primary[100],
                }, 
                secondary : {
                    main: colors.greenAccent[500],
                }, 
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                }, 
                background : {
                    default: '#fcfcfc',
                }
            })
        }
    }
}