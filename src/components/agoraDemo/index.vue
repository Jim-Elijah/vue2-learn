<template>
    <div>
      <agora :channel="channel">
        <agora-audio-sender />
        <agora-audio-receiver />
        <agora-video-receiver />
        <agora-video-sender />
      </agora>
    </div>
  </template>
  
  <script>
  import { channelId } from '@/const/Agora';
  export default {
    name: "agora-demo",
    data() {
      return {
        channel: channelId,
      };
    }
  };
  </script>