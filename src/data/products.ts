import type { Product, CategoryInfo } from '@/types'

export const categories: CategoryInfo[] = [
  { id: 'fleisch', label: 'Fleisch' },
  { id: 'wurst', label: 'Wurst' },
  { id: 'eier', label: 'Eier' },
  { id: 'obst', label: 'Obst & Gemüse' },
  { id: 'getraenk', label: 'Getränke' },
  { id: 'aufstrich', label: 'Aufstriche' },
  { id: 'geschenk', label: 'Geschenke' },
]

export const products: Omit<Product, 'id'>[] = [
  { name: 'Rindersteak', description: 'Saftiges Rindersteak aus artgerechter Weidehaltung.', price: '14,90 € / kg', category: 'fleisch' },
  { name: 'Schweinebraten', description: 'Zarter Schweinebraten vom glücklichen Schwein.', price: '9,50 € / kg', category: 'fleisch' },
  { name: 'Hähnchenbrust', description: 'Mageres Hähnchenbrustfilet von Freilandhühnern.', price: '11,20 € / kg', category: 'fleisch' },
  { name: 'Bauernbratwurst', description: 'Traditionelle Bauernbratwurst nach eigenem Rezept.', price: '7,80 € / kg', category: 'wurst' },
  { name: 'Landjäger', description: 'Luftgetrockneter Landjäger - ideal für unterwegs.', price: '3,50 € / Stk', category: 'wurst' },
  { name: 'Wiener Würstchen', description: 'Feine Wiener Würstchen aus hochwertigem Fleisch.', price: '6,90 € / kg', category: 'wurst' },
  { name: 'Freilandeier (10er)', description: 'Eier von glücklichen Hühnern mit viel Auslauf.', price: '4,50 € / Schale', category: 'eier' },
  { name: 'Wachteleier (12er)', description: 'Kleine Wachteleier - eine besondere Delikatesse.', price: '5,50 € / Schale', category: 'eier' },
  { name: 'Apfelkiste', description: 'Saisonale Äpfel aus eigenem Obstgarten.', price: '3,20 € / kg', category: 'obst' },
  { name: 'Erdbeeren (Schale)', description: 'Süsse Erdbeeren direkt vom Feld.', price: '5,00 € / Schale', category: 'obst' },
  { name: 'Kartoffeln (5kg)', description: 'Festkochende Kartoffeln aus biologischem Anbau.', price: '6,50 € / Sack', category: 'obst' },
  { name: 'Apfelsaft', description: 'Naturtrüber Apfelsaft aus unseren Äpfeln.', price: '3,80 € / Liter', category: 'getraenk' },
  { name: 'Holunderblüten-Sirup', description: 'Erfrischender Holunderblütensirup.', price: '5,50 € / Flasche', category: 'getraenk' },
  { name: 'Kräuterlimonade', description: 'Spritzige Limonade mit Kräutern aus dem Garten.', price: '3,20 € / Flasche', category: 'getraenk' },
  { name: 'Kürbis-Aufstrich', description: 'Herzhafter Kürbisaufstrich mit feinen Gewürzen.', price: '4,50 € / Glas', category: 'aufstrich' },
  { name: 'Kräuter-Frischkäse', description: 'Frischkäse mit wilden Kräutern von der Hofwiese.', price: '4,20 € / Becher', category: 'aufstrich' },
  { name: 'Geschenkkorb "Bauernglück"', description: 'Ausgewählte Hofspezialitäten im rustikalen Korb.', price: '29,90 €', category: 'geschenk' },
  { name: 'Geschenkkorb "Feine Auslese"', description: 'Edle Weine und Aufstriche im eleganten Korb.', price: '49,90 €', category: 'geschenk' },
]
