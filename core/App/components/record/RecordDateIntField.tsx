import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

import { dateIntFormat, lengthOfhiddenAttributes } from '../../constants'
import { useTheme } from '../../contexts/theme'
import { Attribute, Field } from '../../types/record'
import { testIdWithKey } from '../../utils/testable'

interface RecordBinaryFieldProps {
  field: Field
  shown?: boolean
}

const RecordDateIntField: React.FC<RecordBinaryFieldProps> = ({ field, shown }) => {
  const { ListItems } = useTheme()
  const [date, setDate] = useState<string | undefined>()

  useEffect(() => {
    if (dayjs((field as Attribute).value as string, dateIntFormat, true).isValid()) {
      const dateObject = dayjs((field as Attribute).value as string, dateIntFormat)
      setDate(dayjs(dateObject).format(field.format))
    } else {
      setDate((field as Attribute).value as string)
    }
  })

  const styles = StyleSheet.create({
    text: {
      ...ListItems.recordAttributeText,
    },
    image: {
      height: 150,
      aspectRatio: 1,
      resizeMode: 'contain',
      borderRadius: 10,
    },
  })

  return (
    <Text style={styles.text} testID={testIdWithKey('AttributeValue')}>
      {shown ? date : Array(lengthOfhiddenAttributes).fill('\u2022').join('')}
    </Text>
  )
}

export default RecordDateIntField