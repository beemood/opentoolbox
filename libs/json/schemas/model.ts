export type Model = { 
      properties?:Record<PropertyName,Property>
relations?:Record<PropertyName,RelationProperty>
uniques?:PropertyName[]
      } 
export type Generated = 'id' | 'uuid' | 'createdAt' | 'updatedAt' | 'deletedAt'
export type Icon = 'home'
export type IntegerFormat = 'rate' | 'percent'
export type ModelName = 'User' | 'Role' | 'Permission' | 'Product' | 'Category'
export type NumberFormat = 'rate' | 'percent'
export type OnDelete = 'cascade'
export type PropertyName = 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'username' | 'password' | 'name' | 'role' | 'roles' | 'permission' | 'permissions' | 'category'
export type PropertyType = 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'
export type RelationType = 'one-to-one' | 'one-to-many' | 'many-to-many' | 'many-to-one'
export type StringFormat = 'email' | 'password' | 'phone'
export type ArrayProperty = { 
      type:'array'
minSize?:number
maxSize?:number
items:Property
defaultValue?:any[]
      } 
export type BooleanProperty = { 
      type:'boolean'
defaultValue?:boolean
      } 
export type CommonProperty = { 
      type:PropertyType
name?:PropertyName
description?:string
required?:boolean
unique?:boolean
readOnly?:boolean
writeOnly?:boolean
generated?:Generated
      } 
export type IntegerProperty = { 
      type:'integer'
minimum?:number
maximum?:number
isIn?:number[]
notIn?:number[]
format?:IntegerFormat
defaultValue?:number
      } 
export type NumberProperty = { 
      type:'number'
minimum?:number
maximum?:number
isIn?:number[]
notIn?:number[]
format?:NumberFormat
defaultValue?:number
      } 
export type ObjectProperty = { 
      type:'object'
target?:ModelName
      } 
export type Property = (CommonProperty & (StringProperty|NumberProperty|IntegerProperty|BooleanProperty|ObjectProperty|ArrayProperty))
export type RelationProperty = { 
      type:RelationType
required?:boolean
target?:ModelName
onDelete?:OnDelete
      } 
export type StringProperty = { 
      type:'string'
minLength?:number
maxLength?:number
isIn?:string[]
notIn?:string[]
format?:StringFormat
defaultValue?:string
      } 