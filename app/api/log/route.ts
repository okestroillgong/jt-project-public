
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, data } = body;

    // This console.log will appear in your terminal
    console.log(message);
    if (data) {
      // Use console.dir to print the full object without truncation
      console.dir(data, { depth: null });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logging API error:', error);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
