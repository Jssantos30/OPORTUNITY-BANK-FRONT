import Cookies from 'cookies'

export default async function handler(req, res) {
  const cookies = new Cookies(req, res)

  try {
    cookies.set('bank-token', '')

    return res.status(200).json({ ok: true })
  } catch (error) {}
}
