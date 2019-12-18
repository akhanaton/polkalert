import gql from 'graphql-tag'

export default gql`
  query Validators {
    validators {
      accountId
      commissionData {
        controllerId
        bondedSelf
        nominatorData
        commission
        sessionIds
        nextSessionIds
      }
      currentValidator
      blocksProducedCount
      slashes {
        amount
        sessionIndex
      }
      recentlyOnline
    }
  }
`
