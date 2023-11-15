import React , { useState } from 'react'
import { createTheme } from '@mui/material/styles'

export const  tokens = (colorMode) => ({ 
 //... returns destructured object or array
    ...(colorMode === 'dark'
    ? {
        'grey': {
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#666666',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#3d3d3d',
        },
        'primary': {
            100: '#e1ecf8',
            200: '#c9def4',
            300: '#a4caec',
            400: '#79ade1',
            500: '#598fd8',
            600: '#4576cb',
            700: '#3b62ba',
            800: '#365297',
            900: '#304678',
        },
        'greenAccent': {
            100: '#cff8e9',
            200: '#9ff0d5',
            300: '#68e0bd',
            400: '#4cceac',
            500: '#1fad8a',
            600: '#168b70',
            700: '#166f5c',
            800: '#16594b',
            900: '#174a40',
        },
        'redAccent': {
            100: '#fbe6e5',
            200: '#f9d0cf',
            300: '#f3b0ae',
            400: '#ea837f',
            500: '#db4f4a',
            600: '#c93e39',
            700: '#a9302c',
            800: '#8c2b28',
            900: '#752a27',
        },
        'blueAccent': {
            100: '#dfe7ff',
            200: '#c4d2ff',
            300: '#a1b4ff',
            400: '#7c8cfd',
            500: '#6870f8',
            600: '#433fec',
            700: '#3731d1',
            800: '#2e2ba8',
            900: '#2a2a85',
        },
    }
    : {
        'storm-dust': {
            100: '#3d3d3d',
            200: '#454545',
            300: '#4f4f4f',
            400: '#5d5d5d',
            500: '#666666',
            600: '#888888',
            700: '#b0b0b0',
            800: '#d1d1d1',
            900: '#e7e7e7',
        },
        'primary': {
            100: '#304678',
            200: '#365297',
            300: '#3b62ba',
            400: '#4576cb',
            500: '#598fd8',
            600: '#79ade1',
            700: '#a4caec',
            800: '#c9def4',
            900: '#e1ecf8',
        },
        'greenAccent': {
            100: '#174a40',
            200: '#16594b',
            300: '#166f5c',
            400: '#168b70',
            500: '#1fad8a',
            600: '#4cceac',
            700: '#68e0bd',
            800: '#9ff0d5',
            900: '#cff8e9',
        },
        'redAccent': {
            100: '#752a27',
            200: '#8c2b28',
            300: '#a9302c',
            400: '#c93e39',
            500: '#db4f4a',
            600: '#ea837f',
            700: '#f3b0ae',
            800: '#f9d0cf',
            900: '#fbe6e5',
        },
        'blueAccent': {
            100: '#2a2a85',
            200: '#2e2ba8',
            300: '#3731d1',
            400: '#433fec',
            500: '#6870f8',
            600: '#7c8cfd',
            700: '#a1b4ff',
            800: '#c4d2ff',
            900: '#dfe7ff'
        },
    })
});

export const themeSettings = (colorMode) => {

}