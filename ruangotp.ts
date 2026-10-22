import 【entity-axios¦canonical_name=axios】 from '【entity-axios¦canonical_name=axios】'
const client = 【entity-axios¦canonical_name=axios】.create({
  baseURL: process.env.RUANGOTP_BASE_URL,
  headers: { 'x-user-id': process.env.RUANGOTP_USER_ID },
  timeout: 15000,
})
export const ruangotp = {
  countries: () => client.get('/api/country-v2/list'),
  services: (country: number) => client.get('/api/services-v2/list', { params: { country } }),
  price: (service: string, country: number) => client.get('/api/cekharga-v2/info', { params: { service, country } }),
  buy: (service: string, country: number, provider_id: number, expected_price: number) =>
    client.get('/api/order-v2/buy', { params: { service, country, provider_id, expected_price } }),
  check: (order_id: string) => client.get('/api/order-v2/check-status', { params: { order_id } }),
  cancel: (order_id: string) => client.get('/api/order-v2/cancel', { params: { order_id } }),
  resend: (order_id: string) => client.get('/api/order-v2/resend', { params: { order_id } }),
}