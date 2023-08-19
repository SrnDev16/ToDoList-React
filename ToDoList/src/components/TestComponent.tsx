
type testProps ={
    alert : {
        show: boolean,
        smg: string,
        color: string,
    };
}

const TestComponent = ({alert}: testProps) => {
  return (
    <div>{alert.smg}</div>
  )
}

export default TestComponent