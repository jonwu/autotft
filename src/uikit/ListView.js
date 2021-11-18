import React from 'react'
import View from './View'

const ListView = ({
  data,
  renderItem,
  renderSeparatorComponent,
  renderEmptyComponent,
  renderHeaderComponent,
  renderFooterComponent,
  horizontal,
  style,
  renderLastSeparator,
  className,
  keyExtractor
}) => {
  if (!data) return null
  if (data.length === 0 && renderEmptyComponent) return renderEmptyComponent()
  return (
    <View
      row={horizontal}
      className={className}
      style={{
        ...style
      }}
    >
      {renderHeaderComponent && renderHeaderComponent()}
      {data.map((item, i) => {
        return (
          <View key={keyExtractor ? keyExtractor(item, i) : i} row={horizontal}>
            {renderItem(item, i)}
            {renderSeparatorComponent &&
              (i !== data.length - 1 || renderLastSeparator) &&
              renderSeparatorComponent(item, i)}
          </View>
        )
      })}
      {renderFooterComponent && renderFooterComponent()}
    </View>
  )
}

export default ListView
