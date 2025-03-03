import { useArray } from "./UseArray"

export default function UseArrayWrapper() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button><br/>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button><br/>
      <button onClick={() => remove(1)}>Remove Second Element</button><br/>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button><br/>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button><br/>
      <button onClick={clear}>Clear</button><br/>
    </div>
  )
}
