export const HOST_API = "http://localhost:5600/";
// export const HOST_API = "https://fanticket.herokuapp.com/";
export const API_AUTH = {
    signup:"/api/v1/auth/signup",
    login:"/api/v1/auth/login",
    verifyEmailOtp:"/api/v1/auth/verify-email-otp",
    account:"/api/v1/auth/my-account",
}
export const API_EVENT = {
    addNewEvent:"/api/v1/event/add-event",
    getAvailabelEvent:"/api/v1/event/get-available-events",
}

export const API_TICKET = {
    saveTicketEvent:"/api/v1/ticket/save-ticket-event",
    getSavedTicket:"/api/v1/ticket/saved-ticket",
    uploadFile:"/api/v1/ticket/upload",
    saveNote:"/api/v1/ticket/save-note",
    saveTicketPrcie:"/api/v1/ticket/save-price",
    uploadTicketAvatar:"/api/v1/ticket/upload-avatar",
    resetTicket:"/api/v1/ticket/reset",
    finializeTicket:"/api/v1/ticket/finalize",
}