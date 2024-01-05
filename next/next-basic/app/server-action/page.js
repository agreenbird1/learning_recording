'use client'

export default function Page() {
  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/server-action/api', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
