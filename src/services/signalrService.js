import * as signalR from '@microsoft/signalr'
import { SIGNALR_HUB, TOKEN } from '../utils/constants/System'

let hubConnection = null

export const startSignalRConnection = async (onMessageReceived) => {
    try {
        if (hubConnection && hubConnection.state === signalR.HubConnectionState.Connected) {
            return hubConnection
        }

        hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(SIGNALR_HUB, {
                accessTokenFactory: () => localStorage.getItem(TOKEN) || '',
            })
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Warning)
            .build()

        if (onMessageReceived) {
            hubConnection.on('ReceiveNotification', onMessageReceived)
        }

        await hubConnection.start()
        console.log('SignalR connected successfully.')
        return hubConnection
    } catch (error) {
        console.error('SignalR connection error:', error)
        return null
    }
}

export const stopSignalRConnection = async () => {
    if (hubConnection) {
        try {
            await hubConnection.stop()
            console.log('SignalR disconnected.')
        } catch (error) {
            console.error('SignalR stop error:', error)
        }
    }
}

export const getSignalRConnection = () => hubConnection
