// Styled-JSX
export default function Home() {
  return (
    <div>
        <h1 className="title">Hello World</h1>
        <style jsx>
            {`
                .title{
                    color: red;
                }
            `}
        </style>
    </div>
  )
}
