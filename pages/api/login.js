import Cookies from 'cookies'

const secure = process.env.NODE_ENV === 'production'

export default async function handler(req, res) {
  const cookies = new Cookies(req, res, { secure })

  try {
    cookies.set('bank-token', req.body.token, {
      secure:false,
      httpOnly: true,
      sameSite: 'lax',
    })
    


    return res.status(200).json({ ok: true })
  } catch (error) {
    return res.status(400).json(error)
  }

  
}
