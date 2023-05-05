import compose from 'compose-function'
import { withErrorBoundary } from 'src/app/providers/withErrorBoundary'
import { withPersist } from 'src/app/providers/withPersist'
import { withQuery } from 'src/app/providers/withQuery'
import { withRouter } from 'src/app/providers/withRouter'
import { withStore } from 'src/app/providers/withStore'

export const withProviders = compose(withErrorBoundary, withRouter, withPersist, withStore, withQuery)
