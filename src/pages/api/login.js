import { setCookie } from "@/util/cookie";


export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Both username and password are required.' });
    }

    // Replace this part with your actual user validation logic
    // Here, we assume the user validation is successful
    const user = { username, password };

    // Set a cookie to indicate that the user is authenticated
    setCookie(res, 'user', JSON.stringify(user), {
      maxAge: 30 * 24 * 60 * 60, // 30 days (adjust as needed)
      httpOnly: true,
      sameSite: 'lax',
    });

    // Return a success message
    return res.status(200).json({ message: 'Login successful', redirectTo: '/' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
