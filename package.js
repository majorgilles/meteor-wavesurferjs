Package.describe({
	summary: 'WaveSurferjs Web Audio Waveform Visualizer'
});

Package.on_use(function (api) {
	if(api.export) {
		api.export('WaveSurfer');
	}
	api.add_files('wavesurfer.min.js', 'client');
});