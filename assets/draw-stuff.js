// =====================================================  draw_grid ====
function draw_grid(rctx, rminor, rmajor, rstroke, rfill) {
    rctx.save();
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for (var ix = 0; ix < width; ix += rminor) {
        rctx.beginPath();
        rctx.moveTo(ix, 0);
        rctx.lineTo(ix, height);
        rctx.lineWidth = (ix % rmajor == 0) ? 0.5 : 0.25;
        rctx.stroke();
        //if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for (var iy = 0; iy < height; iy += rminor) {
        rctx.beginPath();
        rctx.moveTo(0, iy);
        rctx.lineTo(width, iy);
        rctx.lineWidth = (iy % rmajor == 0) ? 0.5 : 0.25;
        rctx.stroke();
        //if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore();
}

// Initialize first row
function fill_first(ctx) {
    ctx.save();
    let p1 = new Path2D();
    p1.rect(0, 0, 10, 10);
    ctx.fill(p1);
    ctx.restore();
}

function test(ctx){
    ctx.save();
    ctx.
    
}
// Process and fill next row
function fill_rows(ctx) {
    ctx.save();
    let _width = 390;
    let _height = width;
    ctx.save();
    for (var ity = 0; ity <= _height; ity += 10) {
        for (var itx = 0; itx <= _width; itx += 10) {
            if (itx == 0) {
                /*if (ctx.is) {
                    let p = new Path2D;
                    p.rect(itx, ity + 10, 10, 10);
                    ctx.fill(p);
                }*/
            }
            else if (it == 390) {

            }
        }
    }ctx.restore();
}