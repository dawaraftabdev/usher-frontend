import React from 'react'
import { LinkList, LinkItem } from './styles'

const LinksComponent = props => {
  return (
    <LinkList isBottom={props.isBottom ? true : false}>
      {props &&
        props.values.map((c, i) => {
          return <LinkItem key={i}>{c.title}</LinkItem>
        })}
    </LinkList>
  )
}
export default LinksComponent
