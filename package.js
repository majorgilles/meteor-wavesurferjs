Package.describe({
	summary: 'Wavesurferjs Web Audio Waveform Visualizer'
});

Package.on_use(function (api) {
	if(api.export) {
		api.export('WaveSurfer');
	}
	api.add_files('lib/build/wavesurfer.min.js', 'client');
});