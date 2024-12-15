export function rangeAnswersDataSet(
  values: number[]
) {
  const count = values.reduce((acc, curr) => {
      if (curr == 0) {
        acc['strongly_disagree'] = acc['strongly_disagree'] + 1
      } else if (curr == 1) {
        acc['somewhat_disagree'] = acc['somewhat_disagree'] + 1
      } else if (curr == 2) {
        acc['neutral'] = acc['neutral'] + 1
      } else if (curr == 3) {
        acc['somewhat_agree'] = acc['somewhat_agree'] + 1
      } else if (curr == 4) {
        acc['strongly_agree'] = acc['strongly_agree'] + 1
      }
      return acc
    },
    {
      strongly_disagree: 0,
      somewhat_disagree: 0,
      neutral: 0,
      somewhat_agree: 0,
      strongly_agree: 0
    } as {
      strongly_disagree: number,
      somewhat_disagree: number,
      neutral: number,
      somewhat_agree: number,
      strongly_agree: number
    }
  )
  return [
    (count.strongly_disagree * 100) / values.length,
    (count.somewhat_disagree * 100) / values.length,
    (count.neutral * 100) / values.length,
    (count.somewhat_agree * 100) / values.length,
    (count.strongly_agree * 100) / values.length,
  ]
}
