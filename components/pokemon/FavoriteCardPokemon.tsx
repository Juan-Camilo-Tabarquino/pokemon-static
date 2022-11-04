import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface props {
    id: number;
}

export const FavoriteCardPokemon: FC<props> = ({id}) => {

    const router = useRouter();

    const onFavoriteClicked = () =>{
      router.push(`/pokemon/${id}`)
    }

  return (
    <Grid xs={6} sm={2} md={2} xl={1} key = {id} >
    <Card isHoverable isPressable onPress={onFavoriteClicked} css={{ padding : 10}}>
        <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={'100%'}
            height={140}
        />
    </Card>
    </Grid>
  )
}
