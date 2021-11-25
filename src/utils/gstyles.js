export default (theme) => {
  return {
    flex: {
      flex: 1
    },
    p1: {
      lineHeight: 1.75,
      fontSize: theme.regular,
      whiteSpace: 'pre-wrap'
    },
    p1_semibold: {
      lineHeight: 1.75,
      fontWeight: 700,
      fontSize: theme.regular
    },
    p1_bold: {
      lineHeight: 1.75,
      fontWeight: 900,
      fontSize: theme.regular
    },
    caption: {
      lineHeight: 1.75,
      fontSize: theme.small
    },
    caption_semibold: {
      lineHeight: 1.75,
      fontWeight: 700,
      fontSize: theme.small
    },
    caption_bold: {
      lineHeight: 1.75,
      fontWeight: 900,
      fontSize: theme.small
    },
    footnote: {
      lineHeight: 1.75,
      fontSize: theme.footnote
    },
    footnote_semibold: {
      lineHeight: 1.75,
      fontWeight: 700,
      fontSize: theme.footnote
    },
    footnote_bold: {
      lineHeight: 1.75,
      fontWeight: 900,
      fontSize: theme.footnote
    },
    h0: {
      fontSize: theme.H0
    },
    h0_semibold: {
      fontWeight: 700,
      fontSize: theme.H0
    },
    h0_bold: {
      fontWeight: 900,
      fontSize: theme.H0
    },
    h1: {
      fontSize: theme.H1
    },
    h1_semibold: {
      fontWeight: 700,
      fontSize: theme.H1
    },
    h1_bold: {
      fontWeight: 900,
      fontSize: theme.H1
    },
    h2: {
      fontSize: theme.H2
    },
    h2_semibold: {
      fontWeight: 700,
      fontSize: theme.H2
    },
    h2_bold: {
      fontWeight: 900,
      fontSize: theme.H2
    },
    h3: {
      fontSize: theme.H3
    },
    h3_semibold: {
      fontWeight: 700,
      fontSize: theme.H3
    },
    h3_bold: {
      fontWeight: 900,
      fontSize: theme.H3
    },
    h4: {
      fontSize: theme.H4
    },
    h4_semibold: {
      fontWeight: 700,
      fontSize: theme.H4
    },
    h4_bold: {
      fontWeight: 900,
      fontSize: theme.H4
    },
    h5: {
      fontSize: theme.H5
    },
    h5_semibold: {
      fontWeight: 700,
      fontSize: theme.H5
    },
    h5_bold: {
      fontWeight: 900,
      fontSize: theme.H5
    },
    flex_column: {
      lineHeight: 1.75,
      display: 'flex',
      flexDirection: 'column'
    },
    flex_row: {
      display: 'flex',
      flexDirection: 'row'
    },
    bottom_5: {
      marginBottom: theme.spacing_5
    },
    bottom_4: {
      marginBottom: theme.spacing_4
    },
    bottom_3: {
      marginBottom: theme.spacing_3
    },
    bottom_2: {
      marginBottom: theme.spacing_2
    },
    bottom_1: {
      marginBottom: theme.spacing_1
    },
    left_5: {
      marginLeft: theme.spacing_5
    },
    left_4: {
      marginLeft: theme.spacing_4
    },
    left_3: {
      marginLeft: theme.spacing_3
    },
    left_2: {
      marginLeft: theme.spacing_2
    },
    left_1: {
      marginLeft: theme.spacing_1
    },
    right_5: {
      marginRight: theme.spacing_5
    },
    right_4: {
      marginRight: theme.spacing_4
    },
    right_3: {
      marginRight: theme.spacing_3
    },
    right_2: {
      marginRight: theme.spacing_2
    },
    right_1: {
      marginRight: theme.spacing_1
    },
    top_5: {
      marginTop: theme.spacing_5
    },
    top_4: {
      marginTop: theme.spacing_4
    },
    top_3: {
      marginTop: theme.spacing_3
    },
    top_2: {
      marginTop: theme.spacing_2
    },
    top_1: {
      marginTop: theme.spacing_1
    },
    line: {
      alignSelf: 'stretch',
      height: theme.borderWidth
    },
    vertical_line: {
      alignSelf: 'stretch',
      minWidth: theme.borderWidth
    },
    border: {
      // borderRadius: theme.borderRadius,
      borderColor: theme.text(0.15),
      borderWidth: 1,
      borderStyle: 'solid'
    },
    shadow: {
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
    },
    card: {
      // borderRadius: 4,
      boxSizing: 'border-box',
      padding: theme.spacing_2,
      backgroundColor: theme.card(),
      borderStyle: 'solid',
      borderWidth: theme.id === 1 ? 1 : 0,
      borderColor: theme.id === 1 ? theme.text(0.15) : undefined,
      boxShadow: theme.id === 1 ? undefined : `0 1px 2px ${theme.text(0.2)}`
    }
  }
}
