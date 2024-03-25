export class ResponseData {
  data: {}
  status: number
  message: string

  constructor(data: {}, status: number, message: string) {
    this.data = data
    this.status = status
    this.message = message
  }
}