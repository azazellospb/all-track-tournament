/* eslint-disable */
import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'

const { Meta } = Card

type User = {
  bio: string
  fullName: string
}

export type UserCardProps = {
  data: User
  className?: string
}

export const ViewerCard = ({ data, className }: UserCardProps) => {
  return (
    <Card
      hoverable
      title={data.fullName}
      cover={<img alt="example" />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta avatar={<Avatar src="https://" />} title="Card title" description="This is the description" />
    </Card>
  )
}
