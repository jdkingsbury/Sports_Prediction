import { PlayerCardInfo } from "@/app/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import BasketBallIcon from "./icons/basketball";
type PlayerCardProps = {
  player: PlayerCardInfo;
};

// TODO: Replace hardcoded rating with actual rating once we start storing player ratings

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card className="shadow-lg p-6">
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0">
          <BasketBallIcon color="text-primary" className="w-10 h-10" />
        </div>
        <div className="flex">
          <CardHeader>
            <CardTitle className="text-xl font-bold tracking-tighter">
              <div>{player.first_last}</div>
              <div className="text-sm text-muted-foreground text-center">
                {player.team_name}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="items-center">
              <p className="text-lg text-muted-foreground">Rating</p>
              <p className="text-2xl text-center font-semibold text-foreground">
                90
              </p>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
