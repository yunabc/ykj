<template>
  <div class="video-record">
    <button class="btn" @click="startRecording"> start </button>
    <button class="btn" @click="endRecord"> stop </button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      recorder: null,
      mediaStream: null,
      chunk: null
    };
  },
  methods: {
    // 开始录制
    startRecording: () => {
      const constraints = {
        video: {
          cursor: 'never'
        }, // 视频信息的设置
        audio: false, // 是否包含音频信息
        logicalSurface: false // 设置是否包含所选屏幕外区域的一些信息
      };
      // navigator.mediaDevices.getDisplayMedia(constraints) // 录制屏幕共享

      // 录制摄像头
      alert(typeof navigator.getUserMedia)
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      }).then(stream => {
        this.mediaStream = stream;
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = e => {
          this.chunk = e.data;
        };
        this.recorder.start();
      });
    },
    // 录制屏幕共享及麦克风
    screenAudioRecording: () => {
      navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then(stream => {
        this.mediaStream = stream;
        navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then(vstream => {
          // 屏幕共享和麦克风进行混流
          vstream.getTracks().forEach(track => {
            this.mediaStream.addTrack(track);
          });
          // 此时的mediaStream已包含音频轨道
          this.recorder = new MediaRecorder(stream); // MediaRecorder 进行录制媒体流
          this.recorder.ondataavailable = e => {
            this.chunk = e.data;
          };
          this.recorder.start();
        });
      });
    },
    // 结束录制
    endRecord: () => {
      this.recorder.stop();
      this.mediaStream.getTracks().forEach(track => {
        track.stop();
      });
    }

  }
};
</script>

<style lang="stylus" scoped>
.video-record
  position relative
</style>
