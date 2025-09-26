// Data Scientist Portfolio - Main JavaScript File
class DataSciencePortfolio {
    constructor() {
        this.currentDataset = 'geneDisease';
        this.currentChartType = 'scatter';
        this.mainChart = null;
        this.skillsChart = null;
        this.datasets = this.initializeDatasets();
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
                name: 'Survival Analysis - Treatment Response',
                data: [
                    {x: '6-month', y: 0.95},
                    {x: '12-month', y: 0.89},
                    {x: '18-month', y: 0.82},
                    {x: '24-month', y: 0.76},
                    {x: '30-month', y: 0.69},
                    {x: '36-month', y: 0.61},
                    {x: '42-month', y: 0.54},
                    {x: '48-month', y: 0.47},
                    {x: '54-month', y: 0.41},
                    {x: '60-month', y: 0.35}
                ],
                insights: [
                    {
                        title: 'Treatment Efficacy',
                        content: '5-year overall survival rate of 35% shows treatment benefit',
                        type: 'success'
                    },
                    {
                        title: 'Early Response',
                        content: 'Rapid decline in first 24 months indicates aggressive disease progression',
                        type: 'warning'
                    },
                    {
                        title: 'Long-term Survivors',
                        content: 'Survival curve plateaus after 36 months suggesting durable responses',
                        type: 'info'
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
            xAxisLabel = 'Time Point';
            yAxisLabel = 'Survival Probability';
            tooltipFormatter = (params) => {
                return `Time: ${params.data[2]}<br/>Survival: ${(params.data[1] * 100).toFixed(1)}%`;
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
            this.performAnalysis('correlation');
        });

        document.getElementById('regressionBtn').addEventListener('click', () => {
            this.performAnalysis('regression');
        });

        document.getElementById('clusterBtn').addEventListener('click', () => {
            this.performAnalysis('clustering');
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
    new DataSciencePortfolio();
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