import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appId = 1012126860;
    const secret = "a76ff8d7337230b48f6d352fc017d74e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      secret,
      roomId,
      Date.now().toString(),
      "Mohit"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
      maxUsers: 2,
    });
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div ref={myMeeting} className="w-full h-full" />
    </div>
  );
};

export default Room;
