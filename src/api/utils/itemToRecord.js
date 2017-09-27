export default function itemToRecord(item) {
  const record = { fields: {} };
  if (item.id) record.id = item.id;
  if (item.generic) record.fields.generic = item.generic;
  if (item.brand) record.fields.brand = item.brand;
  if (item.indications) record.fields.indications = item.indications;
  if (item.dosage) record.fields.dosage = item.dosage;
  if (item.sideeffects) record.fields.sideeffects = item.sideeffects;

  return record;
}
