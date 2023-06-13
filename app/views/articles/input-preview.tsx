import { Button, Link, SpaceBetween } from "@cloudscape-design/components"
import React, { useState } from "react"
import { LabeledInput } from "/addons/forms/labeled-input"

export const InputPreview = () => {
  const [example1, setExample1] = useState('')
  const [example2, setExample2] = useState('')
  const [example3, setExample3] = useState('')

return <SpaceBetween size="l">
    <LabeledInput 
      label={'Example 1'}
      value={example1}
      placeholder="Custom placeholder"
      constraint="Explain the constraints on valid input."
      description="Description of the field in sentance form."
      error="Some error message"
      info={<Link href="">more info</Link>}
      onChange={event => setExample1(event.detail.value)}
    />
    <LabeledInput 
      label={'Example 2'}
      value={example2}
      placeholder="password"
      onChange={event => setExample2(event.detail.value)}
      mode={'password'}
      stretch
    />
    <LabeledInput 
      label={'Example 3'}
      value={example3}
      placeholder="numeric"
      onChange={event => setExample3(event.detail.value)}
      mode={'number'}
      secondaryControl={<Button>Take action</Button>}
    />
    <LabeledInput 
      label={'Example 4'}
      value={''}
      placeholder="read only"
      onChange={() => {}}
      readOnly
    />
  </SpaceBetween>
}
