export interface Entreprise {
  id: String, 
  name: String,
  description: String,
  imageUrl: String,
  contactName: String,
  contactEmail: String,
  contactPhone: String,
  address: String,
  city: String,
  province: String,
  postalCode: String,
  published: Boolean,
  updatedAt: Date, /* n'est pas dans les interfaces de Dinh */
}


