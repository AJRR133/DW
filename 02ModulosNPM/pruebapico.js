import pc from 'picocolors';

// Texto en rojo
console.log(pc.red('Error: algo salió mal'));

// Texto en verde con fondo amarillo
console.log(pc.bgYellow(pc.green('¡Éxito!')));

// Combinación de estilos: azul y subrayado
console.log(pc.underline(pc.blue('Información importante')));
