import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || '1'

    console.log('Fetching SWAPI page:', page)

    const res = await fetch(`https://swapi.py4e.com/api/people?page=${page}`)

    if (!res.ok) {
      console.error('SWAPI error:', res.status, res.statusText)
      return NextResponse.json({ error: 'Failed to fetch from SWAPI' }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('API handler error:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
