
class customResponse {

    async response({ message, data, success }) {

        return {
            message: message,
            data: data || null,
            success: success === null ? success : success
        }
    }
}


export default new customResponse()