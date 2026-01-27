type GreetingProps = {
  name: string
  age?: number
}

function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <h2>Hello, {name}</h2>
      {age && <p>Age: {age}</p>}
    </div>
  )
}

export default Greeting
