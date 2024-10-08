import { Box } from "@mui/material";
import { getServerSession } from "next-auth";
import { getData } from "@/api/getData";
import { HandlerError, HandlerMessageError } from "@/components/handler/HandlerError";
import { ConfirmProvider } from "@/contexts/ConfirmContext";
import { RoomCard } from "@/model/types";
import { authOptions } from "@/lib/authOptions";
import CardRoom from "@/components/rooms/CardRoom";

import '../additional.css';

export default async function RoomsPage () {
    const session = await getServerSession(authOptions);
    const res = await getData<RoomCard>('room/admin', false, session?.token);

    return (
        <HandlerError>
            <HandlerError.When hasError={Boolean(res.err)}>
                <ConfirmProvider>
                    <Box
                        className='content-page'
                    >
                        <CardRoom 
                            session={session}
                            res={res.data as RoomCard[] | []}
                        />
                    </Box>
                </ConfirmProvider>
            </HandlerError.When>
            <HandlerError.Else>
                <HandlerMessageError 
                    message={res.message || res.err}
                    status={res.status}
                />
            </HandlerError.Else>
        </HandlerError>
    );
}