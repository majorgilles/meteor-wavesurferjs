Package.describe({
	summary: 'WaveSurferjs Web Audio Waveform Visualizer'
});

Package.on_use(function (api) {
	if(api.export) {
		api.export('WaveSurfer');
	}
	api.add_files(['lib/src/wavesurfer.js', 'lib/src/drawer.canvas.js', 'lib/src/drawer.js', 'lib/src/webaudio.buffer.js', 'lib/src/webaudio.js', 'lib/src/webaudio.media.js'], 'client');
	api.add_files('export-wavesurfer.js', 'client');
});