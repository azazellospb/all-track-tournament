import React from 'react'
import { Layout, Badge } from 'antd'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { NotificationOutlined } from '@ant-design/icons'
import { useAuth } from 'src/entities/viewer/model/selectors'
import { LogoutButton } from 'src/features/authentication/logout/ui'
import styles from './styles.module.scss'

type THeader = {
  className?: string
} & React.HTMLAttributes<HTMLElement>

const actions = [
  {
    id: 'project_news' as const,
    label: 'Project news',
    Icon: NotificationOutlined,
    url: '/project_news',
    disabled: false,
    hidden: false
  }
]

type ActionId = (typeof actions)[number]['id']

const count: Partial<Record<ActionId, number>> = {
  project_news: 0
}
const Header = ({ className }: THeader) => {
  const { isAuth } = useAuth()
  return (
    <Layout.Header className={cn(styles.root, className)}>
      <Link to="/" className={styles.logo}>
        Сайт
      </Link>
      <div className={styles.search}>Поиск</div>
      <div className={styles.toolbar}>
        {actions.map(({ id, label, Icon, url, disabled }) => (
          <Link
            key={label}
            to={url}
            className={cn(styles.toolbarAction, {
              [styles.toolbarActionDisabled]: disabled
            })}
          >
            <span className={styles.toolbarActionIcon}>
              <Badge count={count[id]} style={{ backgroundColor: '#108ee9' }}>
                <Icon style={{ fontSize: 24 }} />
              </Badge>
            </span>
            <span>{label}</span>
          </Link>
        ))}
      </div>
      <div className={styles.authorization}>{!isAuth ? <Link to="/signin">Sign in</Link> : <LogoutButton />}</div>
    </Layout.Header>
  )
}

export default Header
