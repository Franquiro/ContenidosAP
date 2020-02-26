var juego = new Phaser.Game(415, 250, Phaser.AUTO, '', { preload: preload, create: create, update: update });

let cubos;

let piso;

let cursores;

let jugador;
let jugadorStats = {
  velocidad : 200,
};
const GRAVEDAD = 1200;
//Se ejecuta una vez, precarga los assets a usar en el juego
function preload() 
{
  juego.load.image('plataforma:1x1','imagenes/Pampa/plataforma_1x1.png');
  juego.load.image('piso', 'imagenes/Pampa/piso.png');
  juego.load.spritesheet('jugador','imagenes/Pampa/jugador_h.png', 33, 49);
}

//Se ejecuta una vez, crea los componentes del juego
function create() 
{
  //Activamos las físicas en el juego
  juego.physics.startSystem(Phaser.Physics.ARCADE);
  //le da valor a la gravedad
  juego.physics.arcade.gravity.y = GRAVEDAD;

  piso = juego.add.sprite(0, 206, 'piso');
  juego.physics.arcade.enable(piso);
  piso.body.moves = false;
  piso.body.immovable = true;

  cursores = juego.input.keyboard.createCursorKeys();

  cubos = juego.add.group();
  cubos.enableBody = true;
  cubos.create(150, 165, 'plataforma:1x1');
  cubos.create(250, 165, 'plataforma:1x1');
  cubos.create(350, 165, 'plataforma:1x1');
  for(let i=0; i < cubos.children.length; i++)
  {
    let aux = cubos.children[i];
    aux.body.moves = false;
    aux.body.immovable = true;
  }

  //Dibuja al jugadory y le activa la fisica
  jugador = juego.add.sprite(90, 165, 'jugador');
  juego.physics.arcade.enable(jugador);
  //Cambiamos el centro (pivot) del jugador
  jugador.anchor.set(0.5,0.5);

  jugador.body.collideWorldBounds = true;
}

//Se ejecuta constantemente, actualiza valores
function update() 
{
  //Colision collide entre el jugador y el piso
  juego.physics.arcade.collide(jugador, piso);
  //Colision overlap entre el jugador y el cubo
    //cubos es un grupo (como plataformas) que contiene a todos los cubos.
  juego.physics.arcade.overlap(jugador, cubos, jugadorConCubo);

  if(cursores.left.isDown)
  {
    mover(-1);
  }
  else if(cursores.right.isDown)
  {
    mover(1);
  }
  else
  {
    jugador.body.velocity.x = 0;    
  }
}

function mover(direction)
{
  //Se mueve en la dirección recibida y ajusta su escala para la animacion
  jugador.body.velocity.x = jugadorStats.velocidad * direction;
  jugador.scale.x = direction;
}

function jugadorConCubo(jugador, cubo)
{
  cubo.kill();
    jugador.y = 100;   
}