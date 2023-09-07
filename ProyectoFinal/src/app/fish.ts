export interface Fish {
  id: number;
  name: string;
  origin: string;
  information: string;
}

export const FISH: Fish[] = [
  {
    id: 10,
    name: 'Arroz con Coco y Camarones',
    origin: 'Región Caribe',
    information:
      'Este plato combina arroz, camarones y leche de coco, creando una mezcla irresistible de sabores. Es un clásico de la costa caribeña de Colombia y representa la influencia afrocaribeña en la cocina colombiana.'
  },
  {
    id: 11,
    name: 'Ceviche de Pescado',
    origin: 'Región Pacifica',
    information:
      'El ceviche de pescado es una preparación de pescado crudo marinado en jugo de limón o naranja agria, mezclado con cebolla roja, cilantro y otros condimentos. En Colombia, se encuentra comúnmente en la región del Pacífico, donde se sirve fresco y delicioso.'
  },
  {
    id: 12,
    name: 'Mojarra Frita',
    origin: 'Diversas regiones costeras',
    information:'La mojarra frita es un plato sencillo pero delicioso. Consiste en pescado mojarra, sazonado con especias y frito hasta que esté crujiente. Se sirve con patacones (tajadas de plátano verde frito) y arroz en varias regiones costeras de Colombia.'
  },
  {
    id: 13,
    name: 'Cazuela de Mariscos',
    origin: 'Región Caribe',
    information:
      'Una deliciosa sopa espesa a base de mariscos como camarones, langostinos y calamares, cocidos en un caldo de coco con verduras y especias. Originaria de la costa caribeña de Colombia, esta cazuela es una explosión de sabores tropicales.'
  },
  {
    id: 14,
    name: 'Pargo Rojo a la Talla',
    origin: 'Región Caribe',
    information:
      'El pargo rojo a la talla es un pescado entero a la parrilla, cubierto con una salsa picante y cremosa de cebolla, tomate y especias. Este plato es un clásico de la región caribeña y destaca por su sabor único.'
  },
  {
    id: 15,
    name: 'Pulpo a la Gallega',
    origin: 'Región Andina',
    information:
      'Aunque no es un plato de mar colombiano tradicional, el pulpo a la gallega se ha vuelto popular en algunas partes de Colombia. Consiste en pulpo cocido a la parrilla con aceite de oliva y pimentón, y se sirve en rodajas deliciosamente tiernas.'
  },


]