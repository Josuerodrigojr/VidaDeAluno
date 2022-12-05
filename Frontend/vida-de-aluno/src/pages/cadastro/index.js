import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from 'reactstrap'
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function cadastro() {
  return (<div className='centralizar'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/estudante.png"
        alt="Estudante"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Aluno
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Se matricule como estudante e tenha acesso ao seu comportamento.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/cadastroaluno'><Button  className='centralizar'>Cadastro</Button></Link>
        <Link to='/'><Button  className='centralizar'>Cancelar</Button></Link>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image="/professora.png"
        alt="Professor"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Professor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Se matricule como professor e registre suas aulas.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/cadastroprofessor'><Button  className='centralizar'>Cadastro</Button></Link>
        <Link to='/'><Button  className='centralizar'>Cancelar</Button></Link>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image="/escola.png"
        alt="Escola"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Escola
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Registre sua escola e modernize sua caderneta!!!
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/cadastroescola'><Button  className='centralizar'>Cadastro</Button></Link>
        <br/>
        <Link to='/'><Button  className='centralizar'>Cancelar</Button></Link>
      </CardActions>
    </Card>
    </div>
  );
}

export default cadastro
