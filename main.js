// Data Scientist Portfolio - Main JavaScript File
class DataSciencePortfolio {
    constructor() {
        this.currentDataset = 'geneDisease';
        this.currentChartType = 'scatter';
        this.mainChart = null;
        this.skillsChart = null;
        this.datasets = this.initializeDatasets();
        this.analysisData = this.initializeAnalysisData();
        this.init();
    }

    init() {
        this.setupParticleBackground();
        this.setupMainChart();
        this.setupSkillsChart();
        this.setupEventListeners();
        this.setupContactForm();
        this.animateElements();
    }

    initializeDatasets() {
        return {
            geneDisease: {
                name: 'Gene-Disease Association Analysis',
                data: [
                    {x: 2.1, y: 8.3, category: 'BRCA1'},
                    {x: 1.8, y: 7.2, category: 'BRCA2'},
                    {x: 3.2, y: 12.4, category: 'TP53'},
                    {x: 2.8, y: 9.8, category: 'APOE'},
                    {x: 1.5, y: 5.6, category: 'CFTR'},
                    {x: 2.9, y: 11.1, category: 'ATM'},
                    {x: 3.8, y: 15.2, category: 'KRAS'},
                    {x: 2.3, y: 8.9, category: 'PIK3CA'},
                    {x: 3.1, y: 13.7, category: 'APC'},
                    {x: 2.6, y: 10.4, category: 'EGFR'},
                    {x: 1.9, y: 6.8, category: 'PTEN'},
                    {x: 3.5, y: 14.6, category: 'MYC'}
                ],
                insights: [
                    {
                        title: 'High Risk Variants',
                        content: 'KRAS and MYC show strongest association with disease risk (OR > 3.0)',
                        type: 'warning'
                    },
                    {
                        title: 'Protective Effects',
                        content: 'CFTR variants demonstrate protective association in this population',
                        type: 'success'
                    },
                    {
                        title: 'Statistical Significance',
                        content: '8 out of 12 gene variants show genome-wide significant associations (p < 5×10⁻⁸)',
                        type: 'info'
                    }
                ]
            },
            biomarker: {
                name: 'Biomarker Expression Levels',
                data: [
                    {x: 1, y: 145.2, category: 'Control'},
                    {x: 2, y: 158.7, category: 'Control'},
                    {x: 3, y: 134.9, category: 'Control'},
                    {x: 4, y: 289.4, category: 'Case'},
                    {x: 5, y: 312.8, category: 'Case'},
                    {x: 6, y: 267.3, category: 'Case'},
                    {x: 7, y: 142.1, category: 'Control'},
                    {x: 8, y: 331.6, category: 'Case'},
                    {x: 9, y: 155.9, category: 'Control'},
                    {x: 10, y: 298.7, category: 'Case'}
                ],
                insights: [
                    {
                        title: 'Significant Difference',
                        content: 'Cases show 2.1-fold higher biomarker expression vs controls (p < 0.001)',
                        type: 'success'
                    },
                    {
                        title: 'Diagnostic Potential',
                        content: 'ROC analysis indicates AUC = 0.94 for diagnostic classification',
                        type: 'info'
                    },
                    {
                        title: 'Clinical Cutoff',
                        content: 'Optimal threshold at 200 pg/mL provides 92% sensitivity, 89% specificity',
                        type: 'warning'
                    }
                ]
            },
            survival: {
                name: 'Kaplan-Meier Survival Analysis - Clinical Trial',
                treatmentA: [
                    {x: 0, y: 1.00, category: 'Treatment A'},
                    {x: 3, y: 0.98, category: 'Treatment A'},
                    {x: 6, y: 0.95, category: 'Treatment A'},
                    {x: 9, y: 0.91, category: 'Treatment A'},
                    {x: 12, y: 0.87, category: 'Treatment A'},
                    {x: 15, y: 0.82, category: 'Treatment A'},
                    {x: 18, y: 0.78, category: 'Treatment A'},
                    {x: 21, y: 0.73, category: 'Treatment A'},
                    {x: 24, y: 0.68, category: 'Treatment A'},
                    {x: 30, y: 0.61, category: 'Treatment A'},
                    {x: 36, y: 0.55, category: 'Treatment A'},
                    {x: 42, y: 0.49, category: 'Treatment A'},
                    {x: 48, y: 0.44, category: 'Treatment A'},
                    {x: 54, y: 0.39, category: 'Treatment A'},
                    {x: 60, y: 0.35, category: 'Treatment A'}
                ],
                treatmentB: [
                    {x: 0, y: 1.00, category: 'Treatment B'},
                    {x: 3, y: 0.96, category: 'Treatment B'},
                    {x: 6, y: 0.89, category: 'Treatment B'},
                    {x: 9, y: 0.83, category: 'Treatment B'},
                    {x: 12, y: 0.76, category: 'Treatment B'},
                    {x: 15, y: 0.69, category: 'Treatment B'},
                    {x: 18, y: 0.62, category: 'Treatment B'},
                    {x: 21, y: 0.55, category: 'Treatment B'},
                    {x: 24, y: 0.48, category: 'Treatment B'},
                    {x: 30, y: 0.38, category: 'Treatment B'},
                    {x: 36, y: 0.29, category: 'Treatment B'},
                    {x: 42, y: 0.22, category: 'Treatment B'},
                    {x: 48, y: 0.16, category: 'Treatment B'},
                    {x: 54, y: 0.12, category: 'Treatment B'},
                    {x: 60, y: 0.08, category: 'Treatment B'}
                ],
                data: [], // Will be populated dynamically
                insights: [
                    {
                        title: 'Treatment Superiority',
                        content: 'Treatment A shows significantly better 5-year survival (35% vs 8%, HR=0.62, p<0.001)',
                        type: 'success'
                    },
                    {
                        title: 'Median Survival',
                        content: 'Median overall survival: Treatment A = 42 months, Treatment B = 24 months',
                        type: 'info'
                    },
                    {
                        title: 'Statistical Significance',
                        content: 'Log-rank test p-value < 0.001 indicates highly significant survival difference',
                        type: 'success'
                    },
                    {
                        title: 'Clinical Impact',
                        content: 'Number needed to treat (NNT) = 3.7 for preventing one death at 5 years',
                        type: 'warning'
                    }
                ]
            }
        };
    }

    initializeAnalysisData() {
        return {
            associationTest: {
                name: 'Gene-Disease Association Analysis',
                data: [
                    // Gene variants vs disease risk
                    { gene: 'BRCA1', variant: 'rs80357382', oddsRatio: 2.8, pValue: 0.001, population: 'European' },
                    { gene: 'BRCA2', variant: 'rs81002906', oddsRatio: 3.2, pValue: 0.0008, population: 'European' },
                    { gene: 'TP53', variant: 'rs28934571', oddsRatio: 4.1, pValue: 0.0001, population: 'Asian' },
                    { gene: 'KRAS', variant: 'rs121913529', oddsRatio: 1.9, pValue: 0.01, population: 'Mixed' },
                    { gene: 'APOE', variant: 'rs429358', oddsRatio: 3.7, pValue: 0.0005, population: 'European' },
                    { gene: 'CFTR', variant: 'rs113993960', oddsRatio: 2.1, pValue: 0.005, population: 'European' },
                    { gene: 'LDLR', variant: 'rs688', oddsRatio: 1.6, pValue: 0.02, population: 'Mixed' },
                    { gene: 'PCSK9', variant: 'rs11591147', oddsRatio: 0.7, pValue: 0.008, population: 'European' },
                    { gene: 'MTHFR', variant: 'rs1801133', oddsRatio: 1.4, pValue: 0.03, population: 'Global' },
                    { gene: 'CYP2D6', variant: 'rs1065852', oddsRatio: 2.3, pValue: 0.002, population: 'Asian' }
                ],
                insights: [
                    {
                        title: 'Strongest Association',
                        content: 'TP53 variant shows highest odds ratio (4.1) with p < 0.0001',
                        type: 'success'
                    },
                    {
                        title: 'Population Differences',
                        content: 'BRCA variants show stronger associations in European populations',
                        type: 'info'
                    },
                    {
                        title: 'Protective Effect',
                        content: 'PCSK9 variant shows protective effect (OR = 0.7) against cardiovascular disease',
                        type: 'warning'
                    }
                ]
            },
            coxRegression: {
                name: 'Cox Proportional Hazards Analysis',
                data: [
                    // Hazard ratios for different factors
                    { factor: 'Age (per year)', hazardRatio: 1.05, ci_lower: 1.03, ci_upper: 1.07, pValue: 0.001 },
                    { factor: 'Gender (Male vs Female)', hazardRatio: 1.3, ci_lower: 1.1, ci_upper: 1.6, pValue: 0.003 },
                    { factor: 'Smoking (Yes vs No)', hazardRatio: 2.1, ci_lower: 1.7, ci_upper: 2.6, pValue: 0.0001 },
                    { factor: 'BMI (per unit)', hazardRatio: 1.02, ci_lower: 1.01, ci_upper: 1.04, pValue: 0.01 },
                    { factor: 'Stage III vs I', hazardRatio: 3.2, ci_lower: 2.4, ci_upper: 4.3, pValue: 0.0001 },
                    { factor: 'Stage IV vs I', hazardRatio: 8.7, ci_lower: 6.2, ci_upper: 12.1, pValue: 0.0001 },
                    { factor: 'BRCA1 mutation', hazardRatio: 1.8, ci_lower: 1.3, ci_upper: 2.5, pValue: 0.001 },
                    { factor: 'Treatment B vs A', hazardRatio: 0.6, ci_lower: 0.5, ci_upper: 0.8, pValue: 0.001 },
                    { factor: 'Comorbidity Score', hazardRatio: 1.15, ci_lower: 1.08, ci_upper: 1.23, pValue: 0.0001 }
                ],
                insights: [
                    {
                        title: 'Highest Risk Factor',
                        content: 'Stage IV disease shows 8.7× higher hazard compared to Stage I',
                        type: 'success'
                    },
                    {
                        title: 'Treatment Benefit',
                        content: 'Treatment B reduces hazard by 40% (HR = 0.6, p = 0.001)',
                        type: 'success'
                    },
                    {
                        title: 'Modifiable Risk',
                        content: 'Smoking increases hazard 2.1× - strongest modifiable risk factor',
                        type: 'warning'
                    }
                ]
            },
            rocAnalysis: {
                name: 'ROC Curve Analysis',
                data: [
                    // ROC curve points for different biomarkers
                    { biomarker: 'PSA', sensitivity: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.82, 0.9, 0.95, 1.0], 
                      specificity: [1.0, 0.95, 0.9, 0.85, 0.8, 0.7, 0.6, 0.45, 0.25, 0], auc: 0.85 },
                    { biomarker: 'CA-125', sensitivity: [0, 0.15, 0.3, 0.45, 0.6, 0.72, 0.83, 0.91, 0.97, 1.0], 
                      specificity: [1.0, 0.92, 0.85, 0.78, 0.7, 0.6, 0.48, 0.35, 0.18, 0], auc: 0.78 },
                    { biomarker: 'CEA', sensitivity: [0, 0.08, 0.18, 0.32, 0.48, 0.62, 0.75, 0.85, 0.93, 1.0], 
                      specificity: [1.0, 0.88, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.12, 0], auc: 0.72 },
                    { biomarker: 'Multi-marker Panel', sensitivity: [0, 0.2, 0.4, 0.58, 0.72, 0.83, 0.91, 0.96, 0.99, 1.0], 
                      specificity: [1.0, 0.98, 0.95, 0.9, 0.85, 0.78, 0.68, 0.52, 0.28, 0], auc: 0.92 }
                ],
                insights: [
                    {
                        title: 'Best Performing Biomarker',
                        content: 'Multi-marker panel achieves AUC = 0.92 with excellent discrimination',
                        type: 'success'
                    },
                    {
                        title: 'Clinical Cutoff',
                        content: 'PSA at 90% sensitivity provides 45% specificity for screening',
                        type: 'info'
                    },
                    {
                        title: 'Panel Advantage',
                        content: 'Combined biomarkers outperform individual markers significantly',
                        type: 'success'
                    }
                ]
            }
        };
    }

    setupParticleBackground() {
        // P5.js particle system for background
        new p5((p) => {
            let particles = [];
            const numParticles = 50;

            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('particles-canvas');
                
                // Initialize particles
                for (let i = 0; i < numParticles; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(2, 6),
                        opacity: p.random(0.1, 0.3)
                    });
                }
            };

            p.draw = () => {
                p.clear();
                
                // Update and draw particles
                particles.forEach(particle => {
                    // Update position
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    // Wrap around edges
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    // Draw particle
                    p.fill(66, 153, 225, particle.opacity * 255);
                    p.noStroke();
                    p.circle(particle.x, particle.y, particle.size);
                });
                
                // Draw connections
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dist = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        if (dist < 100) {
                            const alpha = p.map(dist, 0, 100, 0.1, 0);
                            p.stroke(66, 153, 225, alpha * 255);
                            p.strokeWeight(1);
                            p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        }
                    }
                }
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        });
    }

    setupMainChart() {
        const chartDom = document.getElementById('mainChart');
        if (!chartDom) {
            console.error('Chart container "mainChart" not found');
            return;
        }
        console.log('Initializing main chart');
        this.mainChart = echarts.init(chartDom);
        this.updateMainChart();
    }

    setupSkillsChart() {
        const chartDom = document.getElementById('skillsChart');
        this.skillsChart = echarts.init(chartDom);
        
        const option = {
            title: {
                text: 'Technical Skills',
                left: 'center',
                textStyle: {
                    color: '#374151',
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            radar: {
                indicator: [
                    { name: 'Machine Learning', max: 100 },
                    { name: 'Statistics', max: 100 },
                    { name: 'Data Visualization', max: 100 },
                    { name: 'Programming', max: 100 },
                    { name: 'Big Data', max: 100 },
                    { name: 'Deep Learning', max: 100 }
                ],
                shape: 'polygon',
                splitNumber: 5,
                axisName: {
                    color: '#6b7280',
                    fontSize: 12
                },
                splitLine: {
                    lineStyle: {
                        color: '#e5e7eb'
                    }
                },
                splitArea: {
                    show: false
                }
            },
            series: [{
                name: 'Skills',
                type: 'radar',
                data: [{
                    value: [95, 98, 92, 90, 85, 88],
                    name: 'Current Level',
                    areaStyle: {
                        color: 'rgba(66, 153, 225, 0.3)'
                    },
                    lineStyle: {
                        color: '#4299e1',
                        width: 2
                    },
                    itemStyle: {
                        color: '#4299e1'
                    }
                }]
            }]
        };
        
        this.skillsChart.setOption(option);
    }

    updateMainChart() {
        const dataset = this.datasets[this.currentDataset];
        let option;

        switch (this.currentChartType) {
            case 'scatter':
                option = this.getScatterOption(dataset);
                break;
            case 'bar':
                option = this.getBarOption(dataset);
                break;
            case 'line':
                option = this.getLineOption(dataset);
                break;
            case 'heatmap':
                option = this.getHeatmapOption(dataset);
                break;
        }

        this.mainChart.setOption(option, true);
        this.updateInsights(dataset);
    }

    getScatterOption(dataset) {
        // Dynamic axis labels based on dataset
        let xAxisLabel = 'Log2 Fold Change';
        let yAxisLabel = '-Log10 P-value';
        let tooltipFormatter = (params) => {
            return `Gene: ${params.data[2]}<br/>Log2 FC: ${params.data[0]}<br/>-Log10(p): ${params.data[1]}`;
        };

        if (dataset.name.includes('Biomarker')) {
            xAxisLabel = 'Sample ID';
            yAxisLabel = 'Expression Level (pg/mL)';
            tooltipFormatter = (params) => {
                return `Sample: ${params.data[0]}<br/>Expression: ${params.data[1]} pg/mL<br/>Group: ${params.data[2]}`;
            };
        } else if (dataset.name.includes('Survival')) {
            xAxisLabel = 'Time (months)';
            yAxisLabel = 'Survival Probability';
            tooltipFormatter = (params) => {
                return `Time: ${params.data[0]} months<br/>Survival: ${(params.data[1] * 100).toFixed(1)}%<br/>Group: ${params.data[2]}`;
            };
        }

        // Special handling for survival analysis with multiple treatment groups
        if (dataset.name.includes('Survival')) {
            return {
                title: {
                    text: dataset.name,
                    left: 'center',
                    textStyle: {
                        color: '#374151',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: tooltipFormatter
                },
                legend: {
                    data: ['Treatment A', 'Treatment B'],
                    bottom: 10
                },
                xAxis: {
                    type: 'value',
                    name: xAxisLabel,
                    nameLocation: 'middle',
                    nameGap: 30,
                    min: 0,
                    max: 60
                },
                yAxis: {
                    type: 'value',
                    name: yAxisLabel,
                    nameLocation: 'middle',
                    nameGap: 40,
                    min: 0,
                    max: 1,
                    axisLabel: {
                        formatter: (value) => (value * 100).toFixed(0) + '%'
                    }
                },
                series: [
                    {
                        name: 'Treatment A',
                        type: 'scatter',
                        data: dataset.treatmentA.map(d => [d.x, d.y, 'Treatment A']),
                        itemStyle: {
                            color: '#3B82F6',
                            opacity: 0.8
                        },
                        symbolSize: 10
                    },
                    {
                        name: 'Treatment B',
                        type: 'scatter',
                        data: dataset.treatmentB.map(d => [d.x, d.y, 'Treatment B']),
                        itemStyle: {
                            color: '#EF4444',
                            opacity: 0.8
                        },
                        symbolSize: 10
                    }
                ]
            };
        }

        return {
            title: {
                text: dataset.name,
                left: 'center',
                textStyle: {
                    color: '#374151',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: tooltipFormatter
            },
            xAxis: {
                type: 'value',
                name: xAxisLabel,
                nameLocation: 'middle',
                nameGap: 30
            },
            yAxis: {
                type: 'value',
                name: yAxisLabel,
                nameLocation: 'middle',
                nameGap: 40
            },
            series: [{
                type: 'scatter',
                data: dataset.data.map(d => [d.x, d.y, d.category]),
                itemStyle: {
                    color: '#4299e1',
                    opacity: 0.7
                },
                symbolSize: 8
            }]
        };
    }

    getBarOption(dataset) {
        // Special handling for survival analysis
        if (dataset.name.includes('Survival')) {
            // Create survival rates comparison at key timepoints
            const keyTimepoints = [12, 24, 36, 48, 60]; // 1, 2, 3, 4, 5 years
            const treatmentAData = [];
            const treatmentBData = [];
            
            keyTimepoints.forEach(time => {
                // Find closest timepoint in data
                const closestA = dataset.treatmentA.reduce((prev, curr) => 
                    Math.abs(curr.x - time) < Math.abs(prev.x - time) ? curr : prev
                );
                const closestB = dataset.treatmentB.reduce((prev, curr) => 
                    Math.abs(curr.x - time) < Math.abs(prev.x - time) ? curr : prev
                );
                
                treatmentAData.push((closestA.y * 100).toFixed(1));
                treatmentBData.push((closestB.y * 100).toFixed(1));
            });

            return {
                title: {
                    text: dataset.name + ' - Survival Rates at Key Timepoints',
                    left: 'center',
                    textStyle: {
                        color: '#374151',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: (params) => {
                        let result = `${params[0].axisValue} months<br/>`;
                        params.forEach(param => {
                            result += `${param.seriesName}: ${param.value}%<br/>`;
                        });
                        return result;
                    }
                },
                legend: {
                    data: ['Treatment A', 'Treatment B'],
                    bottom: 10
                },
                xAxis: {
                    type: 'category',
                    data: keyTimepoints.map(t => t + ' months'),
                    name: 'Follow-up Time',
                    nameLocation: 'middle',
                    nameGap: 30
                },
                yAxis: {
                    type: 'value',
                    name: 'Survival Rate (%)',
                    nameLocation: 'middle',
                    nameGap: 40,
                    min: 0,
                    max: 100
                },
                series: [
                    {
                        name: 'Treatment A',
                        type: 'bar',
                        data: treatmentAData,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#3B82F6' },
                                { offset: 1, color: '#1E40AF' }
                            ])
                        }
                    },
                    {
                        name: 'Treatment B',
                        type: 'bar',
                        data: treatmentBData,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#EF4444' },
                                { offset: 1, color: '#DC2626' }
                            ])
                        }
                    }
                ]
            };
        }

        const aggregated = {};
        dataset.data.forEach(d => {
            if (!aggregated[d.category]) {
                aggregated[d.category] = { sum: 0, count: 0 };
            }
            aggregated[d.category].sum += d.y;
            aggregated[d.category].count += 1;
        });

        const categories = Object.keys(aggregated);
        const values = categories.map(cat => 
            aggregated[cat].sum / aggregated[cat].count
        );

        return {
            title: {
                text: dataset.name,
                left: 'center',
                textStyle: {
                    color: '#374151',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: categories
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'bar',
                data: values,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#4299e1' },
                        { offset: 1, color: '#38b2ac' }
                    ])
                }
            }]
        };
    }

    getLineOption(dataset) {
        // Special handling for survival analysis
        if (dataset.name.includes('Survival')) {
            return {
                title: {
                    text: dataset.name,
                    left: 'center',
                    textStyle: {
                        color: '#374151',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: (params) => {
                        let result = `Time: ${params[0].axisValue} months<br/>`;
                        params.forEach(param => {
                            result += `${param.seriesName}: ${(param.value * 100).toFixed(1)}%<br/>`;
                        });
                        return result;
                    }
                },
                legend: {
                    data: ['Treatment A', 'Treatment B'],
                    bottom: 10
                },
                xAxis: {
                    type: 'value',
                    name: 'Time (months)',
                    nameLocation: 'middle',
                    nameGap: 30,
                    min: 0,
                    max: 60
                },
                yAxis: {
                    type: 'value',
                    name: 'Survival Probability',
                    nameLocation: 'middle',
                    nameGap: 40,
                    min: 0,
                    max: 1,
                    axisLabel: {
                        formatter: (value) => (value * 100).toFixed(0) + '%'
                    }
                },
                series: [
                    {
                        name: 'Treatment A',
                        type: 'line',
                        data: dataset.treatmentA.map(d => [d.x, d.y]),
                        lineStyle: {
                            color: '#3B82F6',
                            width: 3
                        },
                        itemStyle: {
                            color: '#3B82F6'
                        },
                        symbol: 'circle',
                        symbolSize: 6,
                        step: 'hv',
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: 'rgba(59, 130, 246, 0.2)' },
                                { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
                            ])
                        }
                    },
                    {
                        name: 'Treatment B',
                        type: 'line',
                        data: dataset.treatmentB.map(d => [d.x, d.y]),
                        lineStyle: {
                            color: '#EF4444',
                            width: 3
                        },
                        itemStyle: {
                            color: '#EF4444'
                        },
                        symbol: 'circle',
                        symbolSize: 6,
                        step: 'hv',
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: 'rgba(239, 68, 68, 0.2)' },
                                { offset: 1, color: 'rgba(239, 68, 68, 0.05)' }
                            ])
                        }
                    }
                ]
            };
        }

        return {
            title: {
                text: dataset.name,
                left: 'center',
                textStyle: {
                    color: '#374151',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: dataset.data.map(d => d.x)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                data: dataset.data.map(d => d.y),
                smooth: true,
                lineStyle: {
                    color: '#4299e1',
                    width: 3
                },
                itemStyle: {
                    color: '#4299e1'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(66, 153, 225, 0.3)' },
                        { offset: 1, color: 'rgba(66, 153, 225, 0.1)' }
                    ])
                }
            }]
        };
    }

    getHeatmapOption(dataset) {
        // Special handling for survival analysis
        if (dataset.name.includes('Survival')) {
            // Create survival probability heatmap over time periods
            const timePeriods = ['0-12 months', '12-24 months', '24-36 months', '36-48 months', '48-60 months'];
            const treatments = ['Treatment A', 'Treatment B'];
            const data = [];
            
            // Calculate survival rates for each period
            const periodRanges = [[0, 12], [12, 24], [24, 36], [36, 48], [48, 60]];
            
            treatments.forEach((treatment, treatmentIdx) => {
                const treatmentData = treatment === 'Treatment A' ? dataset.treatmentA : dataset.treatmentB;
                
                periodRanges.forEach((range, periodIdx) => {
                    // Find data points in this period and calculate average
                    const periodData = treatmentData.filter(d => d.x >= range[0] && d.x < range[1]);
                    const avgSurvival = periodData.length > 0 
                        ? periodData.reduce((sum, d) => sum + d.y, 0) / periodData.length 
                        : 0;
                    
                    data.push([periodIdx, treatmentIdx, avgSurvival]);
                });
            });

            return {
                title: {
                    text: 'Survival Probability Heatmap',
                    left: 'center',
                    textStyle: {
                        color: '#374151',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    position: 'top',
                    formatter: (params) => {
                        return `${timePeriods[params.data[0]]}<br/>${treatments[params.data[1]]}<br/>Survival: ${(params.data[2] * 100).toFixed(1)}%`;
                    }
                },
                xAxis: {
                    type: 'category',
                    data: timePeriods,
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: treatments,
                    splitArea: {
                        show: true
                    }
                },
                visualMap: {
                    min: 0,
                    max: 1,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '15%',
                    inRange: {
                        color: ['#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
                    },
                    text: ['High Survival', 'Low Survival'],
                    textStyle: {
                        color: '#374151'
                    }
                },
                series: [{
                    name: 'Survival Probability',
                    type: 'heatmap',
                    data: data,
                    label: {
                        show: true,
                        formatter: (params) => (params.value[2] * 100).toFixed(0) + '%'
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            };
        }

        // Generate correlation matrix for heatmap
        const data = [];
        const variables = ['BRCA1', 'TP53', 'KRAS', 'APOE', 'CFTR'];
        
        // Predefined correlation values for gene expression
        const correlations = [
            [1.00, 0.34, -0.12, 0.67, 0.23],
            [0.34, 1.00, 0.45, -0.28, 0.56],
            [-0.12, 0.45, 1.00, 0.19, -0.34],
            [0.67, -0.28, 0.19, 1.00, 0.41],
            [0.23, 0.56, -0.34, 0.41, 1.00]
        ];
        
        for (let i = 0; i < variables.length; i++) {
            for (let j = 0; j < variables.length; j++) {
                data.push([i, j, correlations[i][j]]);
            }
        }

        return {
            title: {
                text: 'Gene Expression Correlation Matrix',
                left: 'center',
                textStyle: {
                    color: '#374151',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                position: 'top',
                formatter: (params) => {
                    return `${variables[params.data[0]]} vs ${variables[params.data[1]]}<br/>Correlation: ${params.data[2]}`;
                }
            },
            xAxis: {
                type: 'category',
                data: variables,
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: variables,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: -1,
                max: 1,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%',
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            series: [{
                name: 'Correlation',
                type: 'heatmap',
                data: data,
                label: {
                    show: true,
                    formatter: (params) => params.data[2]
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
    }

    updateInsights(dataset) {
        const insightsContainer = document.getElementById('insightsContent');
        insightsContainer.innerHTML = '';

        dataset.insights.forEach(insight => {
            const insightDiv = document.createElement('div');
            const bgColor = insight.type === 'success' ? 'bg-green-50' : 
                           insight.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50';
            const textColor = insight.type === 'success' ? 'text-green-800' : 
                             insight.type === 'warning' ? 'text-yellow-800' : 'text-blue-800';
            
            insightDiv.className = `${bgColor} p-4 rounded-lg`;
            insightDiv.innerHTML = `
                <h5 class="font-medium ${textColor} mb-2">${insight.title}</h5>
                <p class="text-sm ${textColor.replace('800', '700')}">${insight.content}</p>
            `;
            insightsContainer.appendChild(insightDiv);
        });
    }

    setupEventListeners() {
        // Dataset selection
        document.querySelectorAll('.dataset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.dataset-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentDataset = btn.dataset.dataset;
                this.updateMainChart();
            });
        });

        // Chart type selection
        document.querySelectorAll('.chart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentChartType = btn.dataset.chart;
                this.updateMainChart();
            });
        });

        // Analysis buttons
        document.getElementById('correlationBtn').addEventListener('click', () => {
            console.log('Association Test clicked');
            this.showAnalysisVisualization('associationTest');
        });

        document.getElementById('regressionBtn').addEventListener('click', () => {
            console.log('Cox Regression clicked');
            this.showAnalysisVisualization('coxRegression');
        });

        document.getElementById('clusterBtn').addEventListener('click', () => {
            console.log('ROC Analysis clicked');
            this.showAnalysisVisualization('rocAnalysis');
        });

        // Export buttons
        document.getElementById('exportPNG').addEventListener('click', () => {
            this.exportChart('png');
        });

        document.getElementById('exportSVG').addEventListener('click', () => {
            this.exportChart('svg');
        });

        document.getElementById('shareLink').addEventListener('click', () => {
            this.shareVisualization();
        });

        // Skills hover effects
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                anime({
                    targets: item,
                    scale: 1.02,
                    duration: 300,
                    easing: 'easeOutElastic(1, .8)'
                });
            });

            item.addEventListener('mouseleave', (e) => {
                anime({
                    targets: item,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutElastic(1, .8)'
                });
            });
        });
    }

    performAnalysis(type) {
        let message = '';
        switch (type) {
            case 'correlation':
                message = 'Association test completed. Chi-square test: χ² = 12.45 (p = 2.3×10⁻⁴), significant association detected.';
                break;
            case 'regression':
                message = 'Cox proportional hazards model fitted. HR = 2.34 (95% CI: 1.56-3.51, p < 0.001).';
                break;
            case 'clustering':
                message = 'ROC analysis completed. AUC = 0.89 (95% CI: 0.84-0.94), excellent diagnostic performance.';
                break;
        }
        
        this.showNotification(message, 'analysis');
    }

    showAnalysisVisualization(analysisType) {
        console.log('showAnalysisVisualization called with:', analysisType);
        const analysisData = this.analysisData[analysisType];
        console.log('Analysis data:', analysisData);
        
        if (!analysisData) {
            console.error('No analysis data found for type:', analysisType);
            return;
        }

        let option;
        switch (analysisType) {
            case 'associationTest':
                console.log('Creating association test option');
                option = this.getAssociationTestOption(analysisData);
                break;
            case 'coxRegression':
                console.log('Creating cox regression option');
                option = this.getCoxRegressionOption(analysisData);
                break;
            case 'rocAnalysis':
                console.log('Creating ROC analysis option');
                option = this.getROCAnalysisOption(analysisData);
                break;
        }

        console.log('Chart option created:', option);
        
        if (this.mainChart) {
            this.mainChart.setOption(option);
            console.log('Chart updated successfully');
        } else {
            console.error('mainChart not available');
        }
        
        this.updateInsights(analysisData.insights);
        this.showNotification(`${analysisData.name} visualization loaded!`, 'success');
    }

    getAssociationTestOption(dataset) {
        // Create volcano plot for association test
        const data = dataset.data.map(d => [
            Math.log2(d.oddsRatio),
            -Math.log10(d.pValue),
            d.gene,
            d.population
        ]);

        return {
            title: {
                text: dataset.name,
                left: 'center',
                top: 10,
                textStyle: {
                    color: '#374151',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            grid: {
                left: '12%',
                right: '10%',
                top: '15%',
                bottom: '15%',
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: (params) => {
                    const [logOR, negLogP, gene, population] = params.data;
                    const or = Math.pow(2, logOR);
                    const pValue = Math.pow(10, -negLogP);
                    return `Gene: ${gene}<br/>
                           Population: ${population}<br/>
                           Odds Ratio: ${or.toFixed(2)}<br/>
                           P-value: ${pValue.toExponential(2)}<br/>
                           Log2(OR): ${logOR.toFixed(2)}<br/>
                           -Log10(p): ${negLogP.toFixed(2)}`;
                }
            },
            xAxis: {
                type: 'value',
                name: 'Log2(Odds Ratio)',
                nameLocation: 'middle',
                nameGap: 30,
                axisLine: { show: true },
                splitLine: { show: true }
            },
            yAxis: {
                type: 'value',
                name: '-Log10(P-value)',
                nameLocation: 'middle',
                nameGap: 40,
                axisLine: { show: true },
                splitLine: { show: true }
            },
            series: [{
                type: 'scatter',
                data: data,
                symbolSize: (data) => {
                    // Size based on significance
                    return Math.max(8, Math.min(20, data[1] * 5));
                },
                itemStyle: {
                    color: (params) => {
                        const [logOR, negLogP] = params.data;
                        // Color coding: red for risk (OR > 1), blue for protective (OR < 1)
                        // Intensity based on significance
                        const intensity = Math.min(1, negLogP / 4);
                        if (logOR > 0) {
                            return `rgba(239, 68, 68, ${0.4 + intensity * 0.6})`;
                        } else {
                            return `rgba(59, 130, 246, ${0.4 + intensity * 0.6})`;
                        }
                    },
                    borderColor: '#374151',
                    borderWidth: 1
                },
                markLine: {
                    data: [
                        { xAxis: 0, lineStyle: { color: '#6B7280', type: 'dashed' } },
                        { yAxis: -Math.log10(0.05), lineStyle: { color: '#DC2626', type: 'dashed' } }
                    ],
                    label: {
                        formatter: (params) => {
                            if (params.value === 0) return 'No Effect';
                            return 'p = 0.05';
                        }
                    }
                }
            }]
        };
    }

    getCoxRegressionOption(dataset) {
        // Simplified Forest plot for Cox regression results
        const data = dataset.data.map((d, index) => ({
            factor: d.factor,
            hr: d.hazardRatio,
            ci_lower: d.ci_lower,
            ci_upper: d.ci_upper,
            pValue: d.pValue,
            yIndex: index
        }));

        return {
            title: {
                text: dataset.name,
                left: 'center',
                top: 10,
                textStyle: {
                    color: '#374151',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            grid: {
                left: '12%',
                right: '10%',
                top: '15%',
                bottom: '20%',
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: (params) => {
                    const d = data[params.dataIndex];
                    return `Factor: ${d.factor}<br/>
                           Hazard Ratio: ${d.hr.toFixed(2)}<br/>
                           95% CI: (${d.ci_lower.toFixed(2)}, ${d.ci_upper.toFixed(2)})<br/>
                           P-value: ${d.pValue < 0.001 ? '<0.001' : d.pValue.toFixed(3)}`;
                }
            },
            xAxis: {
                type: 'value',
                name: 'Hazard Ratio',
                nameLocation: 'middle',
                nameGap: 25,
                min: 0,
                max: 10,
                splitLine: { show: true },
                axisLine: {
                    lineStyle: {
                        color: '#6B7280',
                        width: 1
                    }
                },
                axisLabel: {
                    fontSize: 11,
                    color: '#374151'
                }
            },
            yAxis: {
                type: 'category',
                data: data.map(d => {
                    // Simplified and shortened factor names for better display
                    let shortName = d.factor;
                    
                    // Create abbreviations for common terms
                    shortName = shortName.replace('(per year)', '/year')
                                        .replace('(per unit)', '/unit')
                                        .replace('(Yes vs No)', '')
                                        .replace('(Male vs Female)', '(M vs F)')
                                        .replace(' vs ', ' vs ')
                                        .replace('Treatment ', 'Tx ')
                                        .replace('Stage ', 'St ')
                                        .replace('mutation', 'mut')
                                        .replace('Score', 'Sc');
                    
                    // If still too long, truncate intelligently
                    if (shortName.length > 20) {
                        const words = shortName.split(' ');
                        if (words.length > 2) {
                            // Keep first and last word, abbreviate middle
                            shortName = words[0] + ' ... ' + words[words.length - 1];
                        } else {
                            shortName = shortName.substring(0, 18) + '..';
                        }
                    }
                    
                    return shortName;
                }),
                axisLabel: {
                    fontSize: 11,
                    color: '#374151',
                    width: 200,
                    overflow: 'truncate',
                    interval: 0,
                    margin: 8
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: 'Hazard Ratio',
                    type: 'scatter',
                    data: data.map((d, index) => [d.hr, index]),
                    symbolSize: (data) => {
                        const pValue = dataset.data[data[1]].pValue;
                        return pValue < 0.001 ? 15 : pValue < 0.01 ? 12 : 10;
                    },
                    itemStyle: {
                        color: (params) => {
                            const hr = params.data[0];
                            const pValue = dataset.data[params.data[1]].pValue;
                            const alpha = pValue < 0.001 ? 0.9 : pValue < 0.01 ? 0.7 : 0.5;
                            return hr > 1 ? `rgba(220, 38, 38, ${alpha})` : `rgba(5, 150, 105, ${alpha})`;
                        },
                        borderColor: '#374151',
                        borderWidth: 1
                    },
                    markLine: {
                        silent: true,
                        data: [
                            {
                                xAxis: 1,
                                lineStyle: {
                                    color: '#DC2626',
                                    type: 'dashed',
                                    width: 2
                                },
                                label: {
                                    formatter: 'HR = 1 (No Effect)',
                                    position: 'insideEndTop',
                                    color: '#DC2626',
                                    fontSize: 11
                                }
                            }
                        ]
                    }
                }
            ]
        };
    }

    getROCAnalysisOption(dataset) {
        // ROC curves for multiple biomarkers
        const series = dataset.data.map((biomarker, index) => {
            const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'];
            const rocData = biomarker.sensitivity.map((sens, i) => [
                1 - biomarker.specificity[i], // 1 - specificity = false positive rate
                sens // sensitivity = true positive rate
            ]);

            return {
                name: `${biomarker.biomarker} (AUC = ${biomarker.auc})`,
                type: 'line',
                data: rocData,
                smooth: false,
                lineStyle: {
                    color: colors[index % colors.length],
                    width: 3
                },
                itemStyle: {
                    color: colors[index % colors.length]
                },
                symbol: 'circle',
                symbolSize: 6
            };
        });

        // Add diagonal reference line
        series.push({
            name: 'Random Classifier',
            type: 'line',
            data: [[0, 0], [1, 1]],
            lineStyle: {
                color: '#6B7280',
                type: 'dashed',
                width: 2
            },
            symbol: 'none',
            silent: true
        });

        return {
            title: {
                text: dataset.name,
                left: 'center',
                top: 10,
                textStyle: {
                    color: '#374151',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            grid: {
                left: '12%',
                right: '10%',
                top: '15%',
                bottom: '20%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    let result = `False Positive Rate: ${(params[0].value[0] * 100).toFixed(1)}%<br/>`;
                    params.forEach(param => {
                        if (param.seriesName !== 'Random Classifier') {
                            result += `${param.seriesName}: ${(param.value[1] * 100).toFixed(1)}% sensitivity<br/>`;
                        }
                    });
                    return result;
                }
            },
            legend: {
                data: series.filter(s => s.name !== 'Random Classifier').map(s => s.name),
                bottom: 10,
                textStyle: {
                    fontSize: 12
                }
            },
            xAxis: {
                type: 'value',
                name: 'False Positive Rate (1 - Specificity)',
                nameLocation: 'middle',
                nameGap: 30,
                min: 0,
                max: 1,
                axisLabel: {
                    formatter: (value) => (value * 100).toFixed(0) + '%'
                }
            },
            yAxis: {
                type: 'value',
                name: 'True Positive Rate (Sensitivity)',
                nameLocation: 'middle',
                nameGap: 40,
                min: 0,
                max: 1,
                axisLabel: {
                    formatter: (value) => (value * 100).toFixed(0) + '%'
                }
            },
            series: series
        };
    }

    exportChart(format) {
        const url = this.mainChart.getDataURL({
            type: format,
            pixelRatio: 2,
            backgroundColor: '#fff'
        });
        
        const link = document.createElement('a');
        link.download = `chart.${format}`;
        link.href = url;
        link.click();
        
        this.showNotification(`Chart exported as ${format.toUpperCase()}!`, 'success');
    }

    shareVisualization() {
        const shareData = {
            dataset: this.currentDataset,
            chartType: this.currentChartType,
            timestamp: new Date().toISOString()
        };
        
        const shareUrl = `${window.location.origin}?viz=${btoa(JSON.stringify(shareData))}`;
        
        navigator.clipboard.writeText(shareUrl).then(() => {
            this.showNotification('Share link copied to clipboard!', 'success');
        });
    }

    setupContactForm() {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                form.reset();
                this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            }, 2000);
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const bgColor = type === 'success' ? 'bg-green-500' : 
                       type === 'analysis' ? 'bg-purple-500' : 'bg-blue-500';
        
        notification.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    animateElements() {
        // Animate metric cards
        anime({
            targets: '.metric-card',
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutElastic(1, .8)'
        });

        // Animate skill items
        anime({
            targets: '.skill-item',
            translateX: [-50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, {start: 500}),
            duration: 600,
            easing: 'easeOutElastic(1, .8)'
        });

        // Animate data cards
        anime({
            targets: '.data-card',
            scale: [0.9, 1],
            opacity: [0, 1],
            delay: anime.stagger(150, {start: 1000}),
            duration: 700,
            easing: 'easeOutElastic(1, .8)'
        });

        // Animate chart containers
        anime({
            targets: '.chart-container',
            opacity: [0, 1],
            delay: 1500,
            duration: 1000,
            easing: 'easeOutQuart'
        });

        // Floating animation for decorative elements
        anime({
            targets: '.floating-data',
            translateY: [-10, 10],
            rotate: [-2, 2],
            duration: 4000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new DataSciencePortfolio();
});

// Handle responsive chart resizing
window.addEventListener('resize', () => {
    setTimeout(() => {
        if (window.portfolio && window.portfolio.mainChart) {
            window.portfolio.mainChart.resize();
        }
        if (window.portfolio && window.portfolio.skillsChart) {
            window.portfolio.skillsChart.resize();
        }
    }, 100);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading states for interactive elements
function addLoadingState(element, duration = 2000) {
    const originalContent = element.innerHTML;
    element.innerHTML = '<span class="animate-spin">⏳</span> Loading...';
    element.disabled = true;
    
    setTimeout(() => {
        element.innerHTML = originalContent;
        element.disabled = false;
    }, duration);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.data-card, .skill-item, .metric-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Export for global access
window.DataSciencePortfolio = DataSciencePortfolio;